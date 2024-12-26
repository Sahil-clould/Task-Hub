import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiDuplicate } from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import AddTask from "./AddTask";
import AddSubTask from "./AddSubTask";
import ConfirmatioDialog from "../Dialogs";
import { useDuplicateTaskMutation, useTrashTaskMutation } from "../../redux/slices/api/taskApiSlice";
import { toast } from "sonner";

const TaskDialog = ({ task, currentUserId, isAdmin, isUserView = false }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  const [deleteTask] = useTrashTaskMutation();      
  const [duplicateTask] = useDuplicateTaskMutation();

  const duplicateHandler = async () => {
    try {
      const res = await duplicateTask(task._id).unwrap();
      toast.success("Task duplicated successfully");
      setTimeout(() => {
        setOpenDialog(false);
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  const deleteClicks = () => {
    setOpenDialog(true);
  };

  const deleteHandler = async () => {
    try {
      const res = await deleteTask({
        id: task._id,
        isTrashed: "trash",
      }).unwrap();
      toast.success(res?.message);
      setTimeout(() => {
        setOpenDialog(false);
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error);
    }
  };

  // Define menu items
  const items = [
    {
      label: "Open Task",
      icon: <AiTwotoneFolderOpen className='mr-2 h-5 w-5' aria-hidden='true' />,
      onClick: () => navigate(`/task/${task._id}`),
    },
  ];

  // Add extra menu options if the user is an admin or the assigned user
  if (!isUserView && (isAdmin || task.assignedTo === currentUserId)) {
    items.push(
      {
        label: "Duplicate Task",
        icon: <HiDuplicate className='mr-2 h-5 w-5' aria-hidden='true' />,
        onClick: duplicateHandler,
      },
      {
        label: "Edit Task",
        icon: <MdOutlineEdit className='mr-2 h-5 w-5' aria-hidden='true' />,
        onClick: () => setOpenEdit(true),
      },
      {
        label: "Delete Task",
        icon: <RiDeleteBin6Line className='mr-2 h-5 w-5' aria-hidden='true' />,
        onClick: deleteClicks,
      }
    );
  }

  return (
    <>
      <div>
        <Menu as='div' className='relative inline-block text-left'>
          <Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600'>
            <BsThreeDots />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute p-4 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={item.onClick}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <AddTask open={openEdit} setOpen={setOpenEdit} task={task} />
      <ConfirmatioDialog
        title='Are you sure you want to delete this task?'
        description='This action cannot be undone'
        onClick={deleteHandler}
        open={openDialog}
        setOpen={setOpenDialog}
      />
    </>
  );
};

export default TaskDialog;

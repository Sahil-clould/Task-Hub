import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const TaskReport = () => {
    const generatePDF = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tasks/report');
            const tasks = response.data;

            const doc = new jsPDF();
            doc.text('Task Report', 14, 15);

            const taskData = tasks.map((task, index) => [
                index + 1,
                task.title,
                task.description,
                task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Due Date',
                task.priority,
            ]);

            const headers = [["#", "Title", "Description", "Due Date", "Priority"]];

            doc.autoTable({
                head: headers,
                body: taskData,
                startY: 20,
            });

            doc.text(`Total Tasks: ${tasks.length}`, 14, doc.autoTable.previous.finalY + 10);
            doc.save('task-report.pdf');
        } catch (error) {
            console.error('Failed to generate task report:', error);
        }
    };

    return (
        <button onClick={generatePDF} className="bg-green-600 text-white rounded-md py-2 px-4">
            Download Task Report
        </button>
    );
};

export default TaskReport;

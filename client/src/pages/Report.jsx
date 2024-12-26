import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

const Report = () => {
    const generatePDF = async () => {
        try {
            // Fetch task data from the backend
            const response = await axios.get('http://localhost:5000/api/report/tasks');
            const tasks = response.data;

            // Create a new PDF document
            const doc = new jsPDF();
            doc.text('Task Report', 14, 15);

            // Map task data to be displayed in the PDF table
            const taskData = tasks.map((task, index) => [
                index + 1,
                task.title,
                task.description,
                task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Due Date',
                task.priority,
                task.stage,
            ]);

            // Define headers for the table
            const headers = [["#", "Title", "Description", "Due Date", "Priority", "Stage"]];

            // Generate the table in the PDF
            doc.autoTable({
                head: headers,
                body: taskData,
                startY: 20,
            });

            // Add total tasks count at the end
            doc.text(`Total Tasks: ${tasks.length}`, 14, doc.autoTable.previous.finalY + 10);

            // Save the PDF
            doc.save('task-report.pdf');
        } catch (error) {
            console.error('Error generating report:', error);
        }
    };

    return (
        <button
            onClick={generatePDF}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
            Download Task Report
        </button>
    );
};

export default Report;

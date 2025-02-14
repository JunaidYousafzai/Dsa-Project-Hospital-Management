const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Project</h1>
        <p className="text-lg text-gray-700">
          This project aims to develop a hospital management application that utilizes the stack data structure
          to manage patient records efficiently. Our application streamlines hospital operations by enabling
          effective record-keeping and retrieval while demonstrating the practical application of stacks in
          real-world scenarios.
        </p>
      </div>


      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Team Members</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li><span className="font-bold">Junaid</span> (204-BSCS-22F) - Team Lead, Backend Development</li>
          <li><span className="font-bold">Sufyan</span> (179-BSCS-22F) - Frontend Development</li>
          <li><span className="font-bold">Rahim</span> (190-BSCS-22F) - Database Management</li>
        </ul>
      </div>


      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Frontend: React.js with Tailwind CSS</li>
          <li>Backend: Java with Spring Boot</li>
          <li>Database: MongoDB</li>
          <li>Data Structure: Stack (custom implementation)</li>
        </ul>
      </div>


      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objectives</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Implement stack operations (push, pop, peek) in a hospital management context.</li>
          <li>Create a user-friendly interface for managing hospital operations.</li>
          <li>Develop a scalable backend with proper API integration.</li>
        </ul>
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Functional Requirements</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Add Patient: Adds a patient record to the stack and updates the database.</li>
          <li>Remove Patient: Pops the most recent patient record.</li>
          <li>View Patient Records: Displays all patient records.</li>
          <li>Search Patient: Search patients by ID or name.</li>
        </ul>
      </div>

      <div className="mt-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
        <p className="text-lg text-gray-700">
          This hospital management application demonstrates the practical application of the stack data
          structure in real-world scenarios. By utilizing modern technologies like React, Java, and MongoDB,
          our project seamlessly integrates DSA concepts with full-stack development.
        </p>
      </div>
    </div>
  );
};

export default About;

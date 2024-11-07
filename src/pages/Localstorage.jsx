export const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "123",
      tasks: [
        {
          newTask: true,
          completed: false,
          active: true,
          failed: false,
          taskTitle: "Develop Landing Page",
          description: "Create a responsive landing page for the new project.",
          taskDate: "2024-10-19",
          category: "Development",
          count : 1
        }
      ]
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "passw0rd!",
      tasks: [
        {
          newTask: false,
          completed: true,
          active: false,
          failed: false,
          taskTitle: "Client Meeting",
          description: "Discuss project scope and timeline with client.",
          taskDate: "2024-10-15",
          category: "Meetings",
          count : 1      }
      ]
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      password: "m1chaelSecure",
      tasks: [
        {
          newTask: true,
          completed: false,
          active: true,
          failed: false,
          taskTitle: "  Documentation",
          description: "Complete user guide for the software application.",
          taskDate: "2024-10-20",
          category: "Documentation",
          count : 1
        }
      ]
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      password: "em1lyPassword",
      tasks: [
        {
          newTask: false,
          completed: true,
          active: false,
          failed: false,
          taskTitle: "Fix Bugs",
          description: "Fix critical bugs reported in the ticketing system.",
          taskDate: "2024-10-17",
          category: "Development",
          count : 1
        }
      ]
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      password: "david!Wilson123",
      tasks: [
        {
          newTask: true,
          completed: false,
          active: true,
          failed: true,
          taskTitle: "Database Migration",
          description: "Migrate the database to a new server.",
          taskDate: "2024-10-18",
          category: "Database",
          count: 1
        }
      ]
    },
    {
      id: 6,
      name: "Sarah Brown",
      email: "sarah.brown@example.com",
      password: "sarahB!Pass",
      tasks: [
        {
          newTask: false,
          completed: true,
          active: false,
          failed: false,
          taskTitle: "Social Media Campaign",
          description: "Launch the new product on all social media platforms.",
          taskDate: "2024-10-12",
          category: "Marketing",
          count : 1
        }
      ]
    },
    {
      id: 7,
      name: "Chris Taylor",
      email: "chris.taylor@example.com",
      password: "chrisT4ylor",
      tasks: [
        {
          newTask: true,
          completed: false,
          active: true,
          failed: false,
          taskTitle: "Team Training",
          description: "Conduct training for the new employees.",
          taskDate: "2024-10-21",
          category: "Training",
          count : 1
        }
      ]
    },
    {
      id: 8,
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      password: "ol1viaMartinez!",
      tasks: [
        {
          newTask: false,
          completed: true,
          active: false,
          failed: false,
          taskTitle: "Budget Report",
          description: "Prepare the budget report for Q4.",
          taskDate: "2024-10-14",
          category: "Finance",
          count : 1
        }
      ]
    },
    {
      id: 9,
      name: "James Anderson",
      email: "james.anderson@example.com",
      password: "JamesAnder!23",
      tasks: [
        {
          newTask: true,
          completed: false,
          active: true,
          failed: false,
          taskTitle: "Server Maintenance",
          description: "Perform routine maintenance on the production server.",
          taskDate: "2024-10-19",
          category: "IT Support",
          count : 1
        }
      ]
    },
    {
      id: 10,
      name: "Sophia Lee",
      email: "sophia.lee@example.com",
      password: "S0phiaLeeSecure",
      tasks: [
        {
          newTask: false,
          completed: true,
          active: false,
          failed: false,
          taskTitle: "Design Mockups",
          description: "Create design mockups for the new mobile app.",
          taskDate: "2024-10-13",
          category: "Design",
          count : 1
        }
      ]
    }
  ];
 
export const admin =
    {
    pass : "1234",
    email: "alimahmood@gmail.com"
    }


export const setstorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees)); 
  localStorage.setItem('admin', JSON.stringify(admin)); 
};

export const getstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) 
  const admin = JSON.parse(localStorage.getItem('admin')) 
  return { employees, admin };
};


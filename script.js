// These lines find the dropdowns and table from the HTML file by their IDs. They allow us to modify these elements dynamically using JavaScript.
// companySelect: Refers to the company dropdown.
// departmentSelect: Refers to the department dropdown.
// specializationsTable: Refers to the table that will display the specializations and colleague information.
// tableBody: Refers to the body of the table where the rows (data) will be added.
// The `companies` array contains objects representing companies, each with an `id`, `name`, `departments`, and nested arrays of `specializations` and `colleagues`.
// Each specialization has its own `id`, `name`, and a list of `colleagues` with their `id`, `name`, `email`, and `age`.
// Company names, department names, colleague names, emails, and ages were generated using ChatGPT.

const companies = [
      {
        id: 1,
        name: "Google",
        departments: [
          {
            id: 1,
            name: "AI and Machine Learning",
            specializations: [
              {
                id: 1,
                name: "Natural Language Processing (NLP)",
                colleagues: [
                  { id: 1, name: "John Doe", email: "johndoe@google.com", age: 28 },
                  { id: 2, name: "Sara Lee", email: "saralee@google.com", age: 27 },
                  { id: 3, name: "Alex Brown", email: "alexbrown@google.com", age: 29 }
                ]
              },
              {
                id: 2,
                name: "Computer Vision",
                colleagues: [
                  { id: 4, name: "Chris Evans", email: "chrisevans@google.com", age: 30 },
                  { id: 5, name: "Anna Taylor", email: "annataylor@google.com", age: 25 }
                ]
              },
              {
                id: 3,
                name: "Reinforcement Learning (RL)",
                colleagues: [
                  { id: 6, name: "Olivia Adams", email: "oliviaadams@google.com", age: 26 },
                  { id: 7, name: "Mason Clark", email: "masonclark@google.com", age: 27 }
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Cloud Computing",
            specializations: [
              {
                id: 4,
                name: "Cloud Infrastructure",
                colleagues: [
                  { id: 8, name: "Henry Wilson", email: "henrywilson@google.com", age: 32 },
                  { id: 9, name: "Sophia Martinez", email: "sophiamartinez@google.com", age: 31 }
                ]
              },
              {
                id: 5,
                name: "Cloud Security",
                colleagues: [
                  { id: 10, name: "Emma Lopez", email: "emmalopez@google.com", age: 29 },
                  { id: 11, name: "James Hill", email: "jameshill@google.com", age: 28 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Microsoft",
        departments: [
          {
            id: 3,
            name: "Productivity and Business Processes",
            specializations: [
              {
                id: 6,
                name: "Microsoft Office Suite",
                colleagues: [
                  { id: 12, name: "Lucas Green", email: "lucasgreen@microsoft.com", age: 33 },
                  { id: 13, name: "Ava White", email: "avawhite@microsoft.com", age: 30 }
                ]
              },
              {
                id: 7,
                name: "Business Solutions",
                colleagues: [
                  { id: 14, name: "Daniel Hall", email: "danielhall@microsoft.com", age: 34 },
                  { id: 15, name: "Zoe King", email: "zoeking@microsoft.com", age: 29 }
                ]
              },
              {
                id: 8,
                name: "Enterprise Services",
                colleagues: [
                  { id: 16, name: "Jack Scott", email: "jackscott@microsoft.com", age: 31 },
                  { id: 17, name: "Amelia Perez", email: "ameliaperez@microsoft.com", age: 28 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Amazon",
        departments: [
          {
            id: 4,
            name: "AWS (Amazon Web Services)",
            specializations: [
              {
                id: 9,
                name: "Web Devlopment",
                colleagues: [
                  { id: 18, name: "Noah Baker", email: "noahbaker@amazon.com", age: 32 },
                  { id: 19, name: "Ella Edwards", email: "ellaedwards@amazon.com", age: 30 }
                ]
              },
              {
                id: 10,
                name: "App Devlopment",
                colleagues: [
                  { id: 20, name: "Liam Carter", email: "liamcarter@amazon.com", age: 28 },
                  { id: 21, name: "Charlotte Miller", email: "charlottemiller@amazon.com", age: 27 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Apple",
        departments: [
          {
            id: 5,
            name: "iOS Development",
            specializations: [
              {
                id: 11,
                name: "Web Devlopment",
                colleagues: [
                  { id: 22, name: "William Turner", email: "williamturner@apple.com", age: 29 },
                  { id: 23, name: "Mia Stewart", email: "miastewart@apple.com", age: 27 }
                ]
              },
              {
                id: 12,
                name: "App Devlopment",
                colleagues: [
                  { id: 24, name: "Emily Barnes", email: "emilybarnes@apple.com", age: 28 },
                  { id: 25, name: "Benjamin Russell", email: "benjaminrussell@apple.com", age: 30 }
                ]
              }
            ]
          }
        ]
      }
    ];




    // Initialize company select box
    // companySelect, departmentSelect, and specializationsTable refer to the HTML elements (dropdowns and table) in the DOM by their id.
    // companySelect: Dropdown for selecting a company.
    // departmentSelect: Dropdown for selecting a department (disabled initially).
    // specializationsTable: The table that shows the colleagues' details.
    // tableBody: Refers to the tbody element inside the table, where rows of data will be added.

    const companySelect = document.getElementById('companySelect');
    const departmentSelect = document.getElementById('departmentSelect');
    const specializationsTable = document.getElementById('specializationsTable');
    const tableBody = specializationsTable.querySelector('tbody');



    // Populate company select box
    // This part adds all the companies to the Company Dropdown.
    // It loops through the companies array, creating a new dropdown option for each company. 
    // option.value stores the companies ID, and option.textContent sets the text to the companies name.
    // Iterates over the companies array and creates an <option> element for each company.
    // Each option's value is the company's id, and the textContent is the company's name.
    // These options are then added to the companySelect dropdown.

    companies.forEach(company => {
      const option = document.createElement('option');
      option.value = company.id;
      option.textContent = company.name;
      companySelect.appendChild(option);
    });



    // Handle company selection
    // This section listens for when a user selects a company and then updates the department dropdown based on the selected company.
   // Event Listener for Company Selection: This listens for a change event in the companySelect dropdown.
   // Finding the selected company: It uses find() to locate the selected company in the companies array based on the companySelect value (company ID).
   // Clearing the department select box: The department dropdown is reset to a default option ("Select Department") and any previously listed options are removed.
   // Populating the department dropdown: If a valid company is selected, the department dropdown is enabled, and it populates with departments from the selected company.
   // Each department becomes an <option> in the departmentSelect dropdown.
   // Clear the table: The table is cleared and hidden after a company is selected to ensure the user selects a department before displaying any data.

    companySelect.addEventListener('change', function() {
      const selectedCompany = companies.find(company => company.id == companySelect.value);

      // Clear department select box
      departmentSelect.innerHTML = '<option value=""> Select Department </option>';

      if (selectedCompany) {
        // Enable and populate department select box
        departmentSelect.disabled = false;
        selectedCompany.departments.forEach(department => {
          const option = document.createElement('option');
          option.value = department.id;
          option.textContent = department.name;
          departmentSelect.appendChild(option);
        });
      } else {
        departmentSelect.disabled = true;
      }

      // Clear table
      tableBody.innerHTML = '';
      specializationsTable.style.display = 'none';
    });




    // Handle department selection
    // This part listens for the user to select a department and then updates the table with the specializations and colleague details.
    // Event Listener for Department Selection: This listens for a change event in the departmentSelect dropdown.
    // Finding the selected department: The selected company is retrieved, and within that company, the selected department is located using find().
   // Clearing the table: The table body is reset before adding new rows.
   // Populating the table: If a department is selected, it iterates over each specialization within the department, 
   // and for each specialization, it loops through the colleagues array. It creates a new table row (<tr>) for each colleague and adds:
   // - The specialization name.
   // - The colleague's name, email, and age in their respective cells (<td>).
   // Once all rows are added, the table is made visible using specializationsTable.style.display = 'table'.
   // If no department is selected, the table is hidden.

    departmentSelect.addEventListener('change', function() {
      const selectedCompany = companies.find(company => company.id == companySelect.value);
      const selectedDepartment = selectedCompany?.departments.find(department => department.id == departmentSelect.value);

      // Clear table body
      tableBody.innerHTML = '';

      if (selectedDepartment) {
        selectedDepartment.specializations.forEach(specialization => {
          specialization.colleagues.forEach(colleague => {
            const row = document.createElement('tr');

            const specializationCell = document.createElement('td');
            specializationCell.textContent = specialization.name;
            row.appendChild(specializationCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = colleague.name;
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = colleague.email;
            row.appendChild(emailCell);

            const ageCell = document.createElement('td');
            ageCell.textContent = colleague.age;
            row.appendChild(ageCell);

            tableBody.appendChild(row);
          });
        });

        // Display table
        specializationsTable.style.display = 'table';
      } else {
        specializationsTable.style.display = 'none';
      }
    });



    // This JavaScript code allows users to interact with the page dynamically, showing relevant data only after a company and department are chosen.
    // Dropdowns:
    // The company dropdown is populated when the page loads.
    // The department dropdown is populated based on the selected company.
    // Table:
    // The table is filled with specialization and colleague information based on the selected department.
    // It is initially hidden and only shows up after valid data is selected.

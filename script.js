// File Upload and Parsing
    const csvFileInput = document.getElementById('csv-file');
    const csvTableBody = document.querySelector('#csv-data-table tbody');

    csvFileInput.addEventListener('change', event => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            Papa.parse(file, {
                header: true,
                complete: results => displayCSVData(results.data),
                error: error => console.error('Error parsing CSV:', error),
            });
        } else {
            alert('Please upload a valid CSV file.');
        }
    });

    function displayCSVData(data) {
        csvTableBody.innerHTML = '';
        data.forEach(row => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${row['Property Name'] || ''}</td>
                <td>${row['Price'] || ''}</td>
                <td>${row['Location'] || ''}</td>
            `;
            csvTableBody.appendChild(tableRow);
        });
    }

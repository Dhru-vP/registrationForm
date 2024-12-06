$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();

        // Collect form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            dob: $('#dob').val(),
            gender: $('input[name="gender"]:checked').val(),
            address: $('#address').val()
        };

        // Send form data to PHP file using AJAX
        $.ajax({
            url: 'process_form.php',
            type: 'POST',
            dataType: 'json', // Expect JSON response
            data: formData,
            success: function(response) {
                if (response.html) {
                    // Create a new window to display the HTML content
                    var newWindow = window.open('', '_blank');
                    newWindow.document.write(response.html);

                    // Add a download button to the new page
                    var downloadButton = newWindow.document.createElement('button');
                    downloadButton.innerHTML = 'Download Form';
                    downloadButton.onclick = function() {
                        downloadForm(response.html);
                    };
                    newWindow.document.body.appendChild(downloadButton);
                }
            },
            error: function(xhr, status, error) {
                $('#response').html('An error occurred: ' + error);
            }
        });
    });
});

// Function to download the form as an HTML file
function downloadForm(htmlContent) {
    // Create a Blob from the HTML content
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'submitted_form.html';  // Set the download filename
    link.click();  // Trigger the download
}

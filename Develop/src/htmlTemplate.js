const generateHTML = (managerSection, engineerSection, internSection) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Team</title>
    <!-- CCS Framework - Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin=“anonymous”></script>
    <style>
        .bg-danger {
            background-color: #ff4d4d !important;
        }

        .shadow {
            box-shadow: 5px 5px 5px rgb(70, 67, 67);
        }
    </style>
</head>

<body>
    <div class="container-fluid p-0 mb-0">
        <div class="jumbotron jumbotron-fluid bg-danger text-light">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center" id="cards">
                ${managerSection}
            </div>
            <div class="row justify-content-center" id="cards">
                ${engineerSection}
            </div>
            <div class="row justify-content-center" id="cards">
                ${internSection}
            </div>
            `
}

module.exports = generateHTML;
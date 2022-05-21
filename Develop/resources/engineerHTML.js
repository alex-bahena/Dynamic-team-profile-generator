const generateEnginerSection = ({ name, role, id, email, github }) => {
    return `
    <div class="col-md-3 py-2">
        <div class="card h-100 bg-light shadow">
            <div class="card-block">
                <div class="card-header bg-primary text-white">
                    <h3 id="name">${name}</h3>
                    <h4><i class="fas fa-glasses"></i> ${role}</h4>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Github:<a target='_blank' href="https://github.com/${github}">${github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
}


module.exports = generateEnginerSection;
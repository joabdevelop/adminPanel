console.log('executing js >>>>>');

// Adiciona a classe 'hovered' ao item de lista selecionado
let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));


// ===========================================
// MANIPULADORES DE EVENTOS DO DOM (executados após o DOM estar pronto)
// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle (Lógica existente)
    // Recomendo mudar de 'toggle.onclick' para 'addEventListener' para consistência
    const toggleButton = document.querySelector(".toggle");
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            const navigation = document.querySelector('.navigation');
            const mainContent = document.querySelector('.main-content');
            // 'main' pode não existir, então usa mainContent.parentNode como fallback
            const main = document.querySelector('.main') || mainContent.parentNode;

            if (navigation) navigation.classList.toggle("active");
            if (main) main.classList.toggle("active");
        });
    }


    // --- CÓDIGO PARA O DROPDOWN DO USUÁRIO ---
    const userInfoDiv = document.querySelector('.user-info'); // ESSE CODIGO CHAMA O USER PARA SER VISUALIZADO
    userInfoDiv.addEventListener('mouseenter', function () {
        userInfoDiv.classList.add('active');
        const dropdown = document.querySelector('.user-dropdown-menu');
        if (dropdown) dropdown.classList.add('active');
    });

    const dropdown = document.querySelector('.user-dropdown-menu'); // ESSE CODIGO CHAMA O USER DROPDOWN PARA SER REMOVIDO
    dropdown.addEventListener('mouseleave', function () {
        dropdown.classList.remove('active');
        const userInfoDiv = document.querySelector('.user-info');
        if (userInfoDiv) userInfoDiv.classList.remove('active');
    });

    // --- CÓDIGO PARA O SUBMENU AO CLICAR ---
    const submenuLis = document.querySelectorAll('.has-submenu');
    submenuLis.forEach(li => {
        li.addEventListener('click', function () {
            li.classList.add('active');
            const submenu = li.querySelector('.submenu');
            if (submenu) submenu.classList.add('active');
        });
        li.addEventListener('mouseleave', function () {
            li.classList.remove('active');
            const submenu = li.querySelector('.submenu');
            if (submenu) submenu.classList.remove('active');
        });
    });

    const navigation = document.querySelector('.navigation');
    const mainContent = document.querySelector('.main-content');
    const submenuToggleIcons = document.querySelectorAll('.submenu-toggle-icon');

    navigation.addEventListener('mouseenter', () => {
        mainContent.classList.add('expanded');
    });
    navigation.addEventListener('mouseleave', () => {
        mainContent.classList.remove('expanded');
    });

    navigation.addEventListener('mouseenter', () => {
        submenuToggleIcons.forEach(icon => icon.classList.add('expanded'));
    });
    navigation.addEventListener('mouseleave', () => {
        submenuToggleIcons.forEach(icon => icon.classList.remove('expanded'));
    });

    // --- CÓDIGO PARA O SPINNER GLOBAL AO NAVEGAR/ENVIAR FORMULÁRIOS ---

    const spinner = document.getElementById("main-spinner");
    const layoutOverlay = document.getElementById("layoutOverlay");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {

            const href = this.getAttribute("href");

            // Ignora dropdowns ou links vazios
            if (!href || href === "#" || this.closest(".has-submenu")) {
                return;
            }

            // Ignora links que abrem em nova aba
            if (this.target === "_blank") return;

            // ✅ Mostra o spinner
            spinner.classList.remove("d-none");
            spinner.classList.add("d-flex");

            // ✅ Esconde o layout principal
            layoutOverlay.style.display = "none";
        });
    });

    // Ao enviar formulários/spinners 
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", () => {
            spinner.classList.remove("d-none");
        });
    });



}); // Fim do DOMContentLoaded principal

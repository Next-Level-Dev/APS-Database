// content.js

const educationContent = [
    {
        title: "Matematik: Toplama İşlemi",
        content: "Toplama işlemi, iki veya daha fazla sayıyı bir araya getirme işlemidir. Örnek: 2 + 3 = 5"
    },
    {
        title: "Fizik: Newton'un Hareket Kanunları",
        content: "Newton'un hareket kanunları, bir cismin hareketinin hangi faktörlere bağlı olduğunu açıklar."
    },
    {
        title: "Kimya: Asit ve Bazlar",
        content: "Asitler ve bazlar, suda çözüldüklerinde farklı özellikler gösteren kimyasal maddelerdir."
    }
];

function loadEducationContent() {
    const contentArea = document.getElementById("content");
    educationContent.forEach((item) => {
        const contentElement = document.createElement("div");
        contentElement.classList.add("content-item");
        contentElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        `;
        contentArea.appendChild(contentElement);
    });
}

window.onload = loadEducationContent;

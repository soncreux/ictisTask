function addPerson() {
    var number = document.getElementById("quantity").value;
    var container = document.getElementById("container");
    var peoplePicker = document.getElementById("people-number-picker")
            // Remove every children it had before
            // alert(number);
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }

        if (number>29){
            alert("Слишком много человек");
        }

        else {
            for (i=0;i<number;i++){
                // Append a node with a random text
                container.appendChild(document.createTextNode("Человек " + (i+1)));
                
                //Создаем поле для фамилии
                var FN = document.createElement("input");
                FN.setAttribute("type", "text");
                FN.setAttribute("name", "FullName");
                FN.setAttribute("placeholder", "ФИО");
                FN.setAttribute("required","");
                
                // Поле должность
                var DOB = document.createElement("input");
                DOB.setAttribute("type", "text");
                DOB.setAttribute("name", "dob[]");
                DOB.setAttribute("placeholder", "Должность");
                DOB.setAttribute("required","");

                //Поле кафедра
                var kaf = document.createElement("input");
                kaf.setAttribute("type", "text");
                kaf.setAttribute("name", "kafedra[]");
                kaf.setAttribute("placeholder", "Кафедра");
                kaf.setAttribute("required","");

                var mail = document.createElement("input");
                mail.setAttribute("type", "email");
                mail.setAttribute("name", "mail[]");
                mail.setAttribute("placeholder", "yourmail@sfedu.ru")
                mail.setAttribute("required","");

                var tel = document.createElement("input");
                tel.setAttribute("type", "tel");
                tel.setAttribute("name", "phone[]");
                tel.setAttribute("placeholder", "+7 (___) ___-__-__")
                tel.setAttribute("pattern", "^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$")
                tel.setAttribute("required","");

                container.appendChild(FN);
                container.appendChild(DOB);
                container.appendChild(kaf);
                container.appendChild(mail);
                container.appendChild(tel);
                // Append a line break 
                container.appendChild(document.createElement("br"));
                
            }
            peoplePicker.appendChild(container);

        }
}

const dropContainer = document.getElementById("dropcontainer")
const fileInput = document.getElementById("images")

dropContainer.addEventListener("dragover", (e) => {
  // prevent default to allow drop
  e.preventDefault()
}, false)

dropContainer.addEventListener("dragenter", () => {
  dropContainer.classList.add("drag-active")
})

dropContainer.addEventListener("dragleave", () => {
  dropContainer.classList.remove("drag-active")
})

dropContainer.addEventListener("drop", (e) => {
  e.preventDefault()
  dropContainer.classList.remove("drag-active")
  fileInput.files = e.dataTransfer.files
})



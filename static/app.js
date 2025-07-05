class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
            dropdown: document.querySelector('#questionDropdown'),
            inputField: document.querySelector('#userMessage')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton, dropdown, inputField } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox));
        sendButton.addEventListener('click', () => this.onSendButton(chatBox));
        dropdown.addEventListener('change', () => this.onDropdownSelect(chatBox));

        inputField.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox);
            }
        });
    }

    toggleState(chatbox) {
        this.state = !this.state;

        if (this.state) {
            chatbox.classList.add('chatbox--active');
            if (this.messages.length === 0) {
                this.messages.push({ name: "SNGC College ChatBot", message: "Hello, Welcome to SNGC ChatBot Service. How can I assist you today?" });
                this.updateChatText(chatbox);
            }
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }

    onDropdownSelect(chatbox) {
        const { dropdown, inputField } = this.args;
        let selectedQuestion = dropdown.value;

        if (selectedQuestion === "Want to ask something else?") {
            inputField.style.display = "block";  // Show input box
        } else if (selectedQuestion !== "") {
            inputField.style.display = "none";  // Hide input box if not "Want to ask something else?"
            inputField.value = selectedQuestion;
        }
    }

    onSendButton(chatbox) {
        const { inputField, dropdown } = this.args;
        let text1 = inputField.value;
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 };
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { name: "SNGC College ChatBot", message: r.answer };
            this.messages.push(msg2);
            this.typeMessage(chatbox, msg2.message);
            inputField.value = '';
            dropdown.value = '';
            inputField.style.display = "none";  // Hide input box after sending message
        }).catch((error) => {
            console.error('Error:', error);
            inputField.value = '';
        });
    }

    typeMessage(chatbox, message) {
        let currentMessageIndex = this.messages.length - 1;
        let displayMessage = '';
        let i = 0;

        const interval = setInterval(() => {
            if (i < message.length) {
                displayMessage += message[i];
                this.messages[currentMessageIndex].message = displayMessage;
                this.updateChatText(chatbox);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 15);
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "SNGC College ChatBot") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}

const chatbox = new Chatbox();
chatbox.display();
export enum MessageType {
    INFO,
    WARN,
    ERROR,
    SUCCESS,
}

export type MessageOption = {
    type: MessageType;
    text: string;
    html?: boolean;
};

type MessageItem = {
    id: string;
    option: MessageOption;
    height: number;
    elem: HTMLDivElement;
};

const GAP = 20;

let container: HTMLDivElement;

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);
}
if (document.body) {
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        init();
    });
}

const messages: MessageItem[] = [];

function showMessage(option: MessageOption) {
    const elem = document.createElement('div');
    elem.className = 'fa-message';
    let typeClass = 'info';
    switch (option.type) {
        case MessageType.INFO:
            typeClass = 'info';
            break;
        case MessageType.WARN:
            typeClass = 'warn';
            break;
        case MessageType.ERROR:
            typeClass = 'error';
            break;
        case MessageType.SUCCESS:
            typeClass = 'success';
            break;
        default:
            throw new Error('Invalid message type');
    }
    elem.classList.add(typeClass);
    const top = messages.reduce((r, item) => r + item.height + GAP, 0) + GAP;
    elem.style.top = `${top}px`;
    container.appendChild(elem);

    const flag = document.createElement('span');
    flag.className = 'fa-message-flag';
    elem.appendChild(flag);

    const content = document.createElement('p');
    content.className = 'fa-message-content';
    elem.appendChild(content);
    if (option.html) {
        content.innerHTML = option.text;
    } else {
        content.innerText = option.text;
    }

    const id = `fa-msg-${Math.random()}`;
    const item: MessageItem = {
        id,
        option,
        elem,
        height: elem.clientHeight,
    };
    messages.push(item);

    const onShown = () => {
        elem.removeEventListener('transitionend', onShown);
        elem.classList.remove('fa-message-enter-active');
        elem.classList.remove('fa-message-enter-from');
        elem.classList.remove('fa-message-enter-to');
        elem.classList.add('fa-message-leave-from');
        setTimeout(() => {
            elem.classList.remove('fa-message-leave-from');
            elem.classList.add('fa-message-leave-active');
            elem.classList.add('fa-message-leave-to');
            elem.addEventListener('transitionend', () => {
                elem.remove();
                const i = messages.findIndex((item) => item.id === id);
                messages.splice(i, 1);
            });
        }, 2000);
    };
    elem.classList.add('fa-message-enter-from');
    requestAnimationFrame(() => {
        elem.classList.add('fa-message-enter-active');
        elem.classList.add('fa-message-enter-to');
    });
    elem.addEventListener('transitionend', onShown);
}

function info(text: string, html = false) {
    showMessage({
        type: MessageType.INFO,
        text,
        html,
    });
}

function warn(text: string, html = false) {
    showMessage({
        type: MessageType.WARN,
        text,
        html,
    });
}

function error(text: string, html = false) {
    showMessage({
        type: MessageType.ERROR,
        text,
        html,
    });
}

function success(text: string, html = false) {
    showMessage({
        type: MessageType.SUCCESS,
        text,
        html,
    });
}

const FaMessage = {
    info,
    warn,
    error,
    success,
};

export default FaMessage;

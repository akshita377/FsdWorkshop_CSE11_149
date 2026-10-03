// import EventEmitter from "node:events";

// function createDOMEvent() {
//     const emitter = new EventEmitter();

//     function addEventListener(eventType, listner) {
//         emitter.on(eventType, listner);
//     }

//     function removeEventListener(eventType, listner) {
//         emitter.off(eventType, listner);
//     }
//     function dispatchEvent(eventType) {
//         event.target=this;
//         event.currentTarget=this;
//         emitter.emit(eventType,event);
//     }
//     const button=createDOMEvent();
//     button.addEventListener('save'()=>)
//     console.log{"saving...."}
// ))
// button.dispatchEvent((
//     eventType:"save"
// ));





// import EventEmitter from "node:events";

// const emitter = new EventEmitter();

// function addEventListener(eventType, listener) {
//     emitter.on(eventType, listener);
// }

// function removeEventListener(eventType, listener) {
//     emitter.off(eventType, listener);
// }

// function dispatchEvent(event) {
//     emitter.emit(event.type, event);
// }

// addEventListener("save", () => {
//     console.log("saving....");
// });

// dispatchEvent({
//     type: "save"
// });

// const button=vreateDOMEvent()
// button.AddEventListner('save',()=>)
//   console.log("saving")
// function handleClick(event)





import EventEmitter from "node:events";

const emitter = new EventEmitter();

function addEventListener(eventType, listener) {
    emitter.on(eventType, listener);
}

function removeEventListener(eventType, listener) {
    emitter.off(eventType, listener);
}

function dispatchEvent(event) {
    emitter.emit(event.type, event);
}


addEventListener("save", () => {
    console.log("saving....");
});

dispatchEvent({
    type: "save"
});
const button = document.createElement("button");
button.innerText = "Submit";
button.addEventListener("click", handleClick);
function handleClick(event) {
    dispatchEvent({
        type: "submit"
    });
}
addEventListener("submit", () => {
    console.log("Form submitted successfully!");
});










//javascript-event driven sinngle threaded language
//syncronous-one task at a time-user interaction damagge
//event loop task executeasynchorunly

//asyn-time taking-asyn mode background run
//syn-dirsct to callstack and run
//perfedined functions promises settimeout ext help to run in ascyn mode
//dom events-browser pe javascript domevent pe kma krta h
//function create --attach to dom event-specific function to event--
//eventemittor---emit /fire event
//eevent pe  kaam --event listner
//

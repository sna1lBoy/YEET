console.log("AAAAAAAAAAAAAAAAAA");

// set up word pairs
const AAAAAAAAAAAAAAAAA = [
    [["delete", "remove"], "YEET"],
    [["deleted", "removed"], "YEETED"],
    [["deleting", "removing"], "YEETING"],
    [["deletable", "removable"], "YEETABLE"],
    [["deletes", "removes"], "YEETS"],
    [["deletions"], "YEETIONS"],
    [["deletion"], "YEETION"],
    [["undelete", "unremove", "restore"], "UNYEET"],
    [["undeleted", "unremoved", "restored"], "UNYEETED"],
    [["undeleting", "unremoving", "restoring"], "UNYEETING"],
    [["undeletable", "unremovable", "restorable"], "UNYEETABLE"],
    [["undeletes", "unremoves", "restores"], "UNYEETS"],
    [["undeletions", "restorations"], "UNYEETIONS"],
    [["undeletion", "restoration"], "UNYEETION"]
];

// YEET delete from given node
function YEET(node, oldWord, newWord) {
    if (node.nodeType === Node.TEXT_NODE) {
        const regex = new RegExp("\\b" + oldWord + "\\b", "gi");
        node.nodeValue = node.nodeValue.replace(regex, newWord);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            YEET(node.childNodes[i], oldWord, newWord);
        }
    }
}

// check for new mutation
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(addedNode => {
            for (const [oldWords, newWord] of AAAAAAAAAAAAAAAAA) {
                for (const oldWord of oldWords) {
                    YEET(addedNode, oldWord, newWord);
                }
            }
        });
    });
});
observer.observe(document, { childList: true, subtree: true });

// replace delete in the new document body
for (const [oldWords, newWord] of AAAAAAAAAAAAAAAAA) {
    for (const oldWord of oldWords) {
        YEET(document.body, oldWord, newWord);
    }
}

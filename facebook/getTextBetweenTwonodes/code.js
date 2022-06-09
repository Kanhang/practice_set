const first= document.getElementById('first');
const second= document.getElementById('second');
console.log(getTextBetweenTwoNodes(first,second));

function getTextBetweenTwoNodes(node1, node2) {
    const res = []

    function dfs(node) {
        if (node == null) {
            return false
        }

        if(node === node2) {
            return true;
        }

        if (node.nodeType === 3) {
            const text = node.textContent.trim();

            if (text) {
                res.push(text)
            }
        }

        if (node.childNodes) {
            for (let child of node.childNodes) {
                if(dfs(child)) {
                    return true;
                }
            }
        }

        return false;
    }

    let currentNode = node1

    while (!dfs(currentNode)) {
        currentNode = currentNode.nextSibling || currentNode.parentNode.nextSibling;
    }

    return res;
}
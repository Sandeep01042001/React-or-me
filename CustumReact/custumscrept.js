
function custonRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.childern
    // domElement.setAttribute('herf' , reactElement.props.herf)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props)  {
        if(prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement ={
    type: "a",
    props:{
       herf: 'https://google.com',
       target: '_blank'
    },
    childern : 'Click me visit google'
}



const mainContainer = document.querySelector('#root')
custonRender(reactElement,mainContainer)
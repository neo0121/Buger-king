// let buttoncontainer = document.querySelector(".buttoncontainer")

// buttoncontainer.style.display = "none"

// let m_over = ()=> buttoncontainer.style.display = "contents"

// let m_leave = ()=> buttoncontainer.style.display = "none"

// let submenucontianer = document.querySelector(".submenucontianer")

// submenucontianer.addEventListener("mouseover",m_over )
// submenucontianer.addEventListener("mouseleave",m_leave )

function over_and_leave(arg1, arg2) {
    var buttoncontainer = document.querySelector(`.${arg1}`)
    var submenucontianer = document.querySelector(`.${arg2}`)
    buttoncontainer.style.display = "none"


    function m_overs() {
        buttoncontainer.style.display = "contents"
    }
    function m_leaves() {
        buttoncontainer.style.display = "none"
    }

    submenucontianer.addEventListener("mouseover", m_overs)
    submenucontianer.addEventListener("mouseleave", m_leaves)
    

}

over_and_leave("buttoncontainer", "submenucontianer")
over_and_leave("buttoncontainer2", "submenucontianer2")
over_and_leave("buttoncontainer3", "submenucontianer3")
over_and_leave("buttoncontainer4", "submenucontianer4")
over_and_leave("buttoncontainer5", "submenucontianer5")
over_and_leave("buttoncontainer6", "submenucontianer6")
over_and_leave("buttoncontainer7", "submenucontianer7")
over_and_leave("buttoncontainer8", "submenucontianer8")

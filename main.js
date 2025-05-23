const colorInputs = document.querySelectorAll('.colors input')
const selectMenu = document.querySelector('.select-box select')
const gradientBox = document.querySelector('.gradient-box')
const textarea = document.querySelector("textarea")
const refreshBtn = document.querySelector(".refresh")
const copyBtn = document.querySelector(".copy")

const randomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
    return `#${randomHex}` 
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorInputs[0].value = randomColor()
        colorInputs[1].value = randomColor()
    }

    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`
    gradientBox.style.background = gradient
    textarea.value = `background: ${gradient};`
}

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value)
    copyBtn.innerHTML = "Kode disalin!"
    setTimeout(() => copyBtn.innerHTML = "Salin kode", 2000)
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false))
})

selectMenu.addEventListener("change", () => generateGradient(false))
refreshBtn.addEventListener("click", () => generateGradient(true))
copyBtn.addEventListener("click", copyCode)
const slider = document.getElementById('slider')
const value = document.getElementById('value')

slider.addEventListener('input', (e) => {
    console.log(e)
    value.textContent = slider.value

    const range_width = getComputedStyle(slider).getPropertyValue('width')
    const label_width = getComputedStyle(value).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = e.target.max
    const min = e.target.min

    const left = slider.value * (num_width / max) - num_label_width / 2 + scale(slider.value, min, max, 10, -10) + 'px'
    value.style.left = left

    console.log(min)
    console.log(max)

})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            perspective: 100,
            RotateX: 0,
            RotateY: 0,
            RotateZ: 0
        }
    },
    computed: {
        box() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.RotateX}deg)
                rotateY(${this.RotateY}deg)
                rotateZ(${this.RotateZ}deg)`
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.RotateX = 0
            this.RotateY = 0
            this.RotateZ = 0
        },
        copy() {
            const el = document.createElement("textarea");
            el.setAttribute("readonly", "")
            el.style.position = "-9999px"
            el.value = `transform: ${this.box.transform}`
            document.body.appendChild(el)
            el.select()
            document.execCommand("copy")
            document.body.removeChild(el)
            console.log(el.value)
        }
    },
}).mount('#app')
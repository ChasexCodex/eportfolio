import {useEffect, useRef} from 'react'

type Props = {
  src1: string
  src2: string
  width: string
  height: string
}

export default function MaskedImage({src1, src2, width, height}: Props) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    const canvas = ref.current
    const ctx = canvas.getContext('2d')!

    const image1 = new Image()
    const image2 = new Image()

    const width = 810
    const height = 1080

    image1.src = src1
    image2.src = src2

    const redraw = (mouse: { x: number, y: number }) => {
      console.log('a')
      canvas.width = canvas.width
      ctx.drawImage(image2, 0, 0, width, height)
      ctx.beginPath()
      ctx.rect(0, 0, width, height)
      ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2, true)
      ctx.clip()
      ctx.drawImage(image1, 0, 0, width, height)
    }

    image2.onload = () => {
      redraw({x: -500, y: -500})
    }

    const getMouse = (e: MouseEvent, canvas: HTMLCanvasElement) => {
      let element: any = canvas,
        offsetX = 0,
        offsetY = 0,
        mx, my

      // Compute the total offset. It's possible to cache this if you want
      if (element.offsetParent !== undefined) {
        do {
          offsetX += element.offsetLeft
          offsetY += element.offsetTop
        } while ((element = element.offsetParent))
      }

      mx = e.pageX - offsetX
      my = e.pageY - offsetY

      return {x: mx, y: my}
    }

    const move = (e: any) => {
      redraw(getMouse(e, canvas))
    }

    canvas.addEventListener('mousemove', move, false)
    canvas.addEventListener('touchmove', move, false)

    canvas.addEventListener('mouseleave', () => {
      redraw({x: -100, y: -200})
    }, false)

  }, [src1, src2])

  return (
    <canvas ref={ref} width={width} height={height}/>
  )
}
import zhongwen from '/images/zhong-wen.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '/images/vite.svg'

export default function ImageBar() {
  return (
    <nav>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://en.wikipedia.org/wiki/Xi_Jinping" target="_blank">
        <img src={zhongwen} className="logo react" alt="ZhongWen" />
      </a>
    </nav>
  );
}

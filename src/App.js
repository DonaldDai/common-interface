import { useEffect, useRef } from 'react';
import './App.css';
import Miew from 'miew';
import { Radio } from 'antd';
import { ColorList, ModeList } from './utils';

const btns = [['Display', ModeList], ['Color', ColorList]];

let inited = false;
let hasStopAutoRotate = false;

function App() {
  const miewDom = useRef(null);
  const viewer = useRef(null);
  useEffect(() => {
    if (!inited) {
      const search = {};
      window.location.search.replace('?', '').split('&').forEach((ss) => {
        const [k, v] = ss.split('=');
        search[k] = decodeURIComponent(v);
      })
      const initModel = search['d'] || 'aspartame.xyz';
      const mViewer = new Miew({ container: miewDom.current, load: `http://app.jyours.com/data/${initModel}`, settings: {
        autoRotation: -0.5,
        bg: {color: 0xffffff, transparent: true},
      } })
      if (mViewer.init()) {
        inited = true;
        mViewer.run();
      }
      viewer.current = mViewer;
    }
    const stop = () => {
      if (hasStopAutoRotate) {
        return;
      }
      if (viewer.current) {
        viewer.current.set('autoRotation', 0);
        hasStopAutoRotate = true;
      }
    };
    if (viewer.current) {
      console.log('listen');
      viewer.current.addEventListener('rotate', stop);
    }
    return () => {
      if (viewer.current) {
        console.log('listen');
        viewer.current.removeEventListener('rotate', stop);
      }
    };
  },[]);

  const handleChange = (e) => {
    let tryDom = e.target;
    const moValue = tryDom.getAttribute('value');
    do {
      const moType = tryDom.getAttribute('data-mo-type');
      if (moType) {
        break;
      }
      tryDom = tryDom.parentNode;
    } while (tryDom.parentNode && tryDom.parentNode !== document)
    const moType = tryDom.getAttribute('data-mo-type');
    console.log(moType, moValue);
    if (viewer.current && moType && moValue) {
      switch (moType) {
        case 'Display':
          viewer.current.rep({ mode: moValue });
          break;
        case 'Color':
          viewer.current.rep({ colorer: moValue });
          break;
        case 'Material':
          viewer.current.rep({ material: moValue });
          break;
        default:
          break;
      }
    }
  }
  return (
    <div className="app">
      <div className='btn-wrapper'>
        {btns.map(([title, list]) => {
          return (
            <div key={title} style={{ marginBottom: 12 }} >
              <h3 style={{ marginBottom: 4 }}>{title}</h3>
              <Radio.Group  defaultValue={list[0].id} buttonStyle="solid" data-mo-type={title} >
                {list.map((d) => {
                  return <Radio.Button key={d.id} value={d.id} data-mo-value={d.id} onClick={handleChange} >{d.name}</Radio.Button>;
                })}
              </Radio.Group>
            </div>
          );
        })}
      </div>
      <div ref={miewDom} className='miew-container' />
    </div>
  );
}

export default App;

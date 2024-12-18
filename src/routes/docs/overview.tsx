import { createFileRoute, Link } from "@tanstack/react-router";
import shooting from "../../assets/shooting.jpg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Route = createFileRoute("/docs/overview")({
  component: () => (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl mb-4">React Three Fiber</h1>
      <p className="text-gray-400">
        React-three-fiber is a React renderer for three.js.
      </p>
      <div className="my-6">
        <p className="my-2">
          React Three Fiber(R3F)는 Three.js의 기능을 React 컴포넌트 형태로
          구현하여, 선언형 문법을 통해 3D 그래픽을 더 쉽게 다룰 수 있도록
          도와주는 도구입니다. 간단히 말해서 Three.js를 React 환경에서 더 쉽게
          사용할 수 있도록 설계된 라이브러리입니다.
        </p>

        <p className="my-2">
          R3F를 효과적으로 사용하려면 Three.js에 대한 기본적인 이해가 큰 도움이
          됩니다. Three.js는 WebGL 기반의 3D 그래픽 라이브러리로, 복잡한 WebGL
          코드를 직접 작성하지 않고도 3D 그래픽을 구현할 수 있도록 도와줍니다.
        </p>
        <p className="my-2">
          R3F와 함께 3D 렌더링을 구현하기 위해 알아야 할 핵심 개념들을 아래에
          정리해 보았습니다. 더 자세한 설명은{" "}
          <Link
            to="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"
            target="blank"
            className="underline"
          >
            Three.js 공식 문서
          </Link>
          를 통해 확인할 수 있습니다.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={shooting} className="h-[400px]" />
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Canvas</h2>
        <p>
          <b>Canvas</b>는 3D 장면을 렌더링하는 공간을 제공한다. 이 컴포넌트
          안에서 3D 객체를 선언하고 화면에 렌더링할 수 있다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas>
      {/* 3D 객체들 */}
    </Canvas>
  );
}`}
        </SyntaxHighlighter>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Scene</h2>
        <p>
          3D 장면을 구성하는 모든 요소들을 포함하는 컨테이너이다. 3D 객체, 조명,
          카메라 등 모든 구성 요소가 이곳에 배치된다.{" "}
          <code className="codeblock">Canvas</code> 컴포넌트를 사용하면, 이 안에
          자동으로 <code className="codeblock">scene</code>이 생성된다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<Canvas>
  {/* 3D 객체들 */}
</Canvas>`}
        </SyntaxHighlighter>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Camera</h2>
        <p>
          <b>Camera</b>는 3D 장면을 볼 때, 그 장면을 어떻게 볼 지 정의합니다.
          Camera는 사용자에게 보이는 시점을 결정하며, 장면의 중심을 기준으로
          이동하고 회전할 수 있다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
  {/* 3D 객체들 */}
</Canvas>`}
        </SyntaxHighlighter>
        <p className="font-medium">종류</p>
        <ul className="pl-8">
          <li className="list-disc my-2">
            <code className="codeblock">PerspectiveCamera</code>: 원근법을
            적용하여 3D 장면을 보여줌
          </li>
          <li className="list-disc my-2">
            <code className="codeblock">OrthographicCamera</code>: 평면 투영을
            사용하여 왜곡 없는 3D 장면을 제공함
          </li>
        </ul>
        <p className="my-8">
          아래는 Three.js에서 Camera의 개념을 쉽게 이해할 수 있는 데모
          사이트이다.
          <iframe
            title="Three.js Camera Demo"
            src="https://codepen.io/asterix77/pen/dyoJrxR"
            className="w-full h-80 border-none mt-4"
          ></iframe>
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Renderer</h2>
        <p>
          <b>Renderer</b>는 Scene과 Camera를 사용하여 3D 장면을 실제 화면에
          렌더링한다. Three.js의{" "}
          <code className="codeblock">WebGLRenderer를</code> 기반으로 하며,
          R3F는 이를 <code className="codeblock">Canvas</code> 컴포넌트 내에서
          자동으로 처리한다.
        </p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Mesh</h2>
        <p>
          <b>Mesh</b>는 3D 장면에서 보이는 실제 객체이다.{" "}
          <code className="codeblock">Geometry와</code>{" "}
          <code className="codeblock">Material을</code>
          결합하여 3D 형태를 생성하며, 객체가 화면에 렌더링되도록 한다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="red" />
</mesh>`}
        </SyntaxHighlighter>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Geometry</h2>
        <p>
          <b>Geometry</b>는 3D 객체의 형태를 정의하는 구성 요소이다. 다양한
          기하학적 형태를 제공하며, 메쉬와 결합하여 화면에 표시되는 객체를
          만든다. 예를 들어, <code className="codeblock">BoxGeometry</code>는
          정육면체 모양을, <code className="codeblock">SphereGeometry</code>는
          구를 생성한다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<mesh>
  <sphereGeometry args={[1, 32, 32]} />
  <meshStandardMaterial color="blue" />
</mesh>`}
        </SyntaxHighlighter>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Materials</h2>
        <p>
          <b>Materials</b>는 3D 객체의 표면을 정의하며, 텍스처, 색상, 반사율
          등을 설정한다. 다양한 종류의 재질이 있으며, 각 재질은 3D 객체의 외관을
          조정하는 데 사용된다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<mesh>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="green" />
</mesh>`}
        </SyntaxHighlighter>
        <p className="font-medium">종류</p>
        <ul className="pl-8">
          <li className="list-disc my-2">
            <code className="codeblock">MeshBasicMaterial</code>: 조명을 받지
            않는 단순한 재질
          </li>
          <li className="list-disc my-2">
            <code className="codeblock">MeshStandardMaterial</code>: 물리 기반
            렌더링(PBR)을 지원하는 재질
          </li>
          <li className="list-disc my-2">
            <code className="codeblock">MeshPhongMaterial</code>: 광택 효과를
            지원하는 재질
          </li>
        </ul>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Light</h2>
        <p>
          <b>Light</b>는 3D 장면을 비추는 광원이다. Light는 객체의 시각적 효과를
          결정하며, 다양한 종류의 광원을 사용할 수 있다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<ambientLight intensity={0.5} />
<pointLight position={[10, 10, 10]} intensity={1} />`}
        </SyntaxHighlighter>
        <p className="font-medium">종류</p>
        <ul className="pl-8">
          <li className="list-disc my-2">
            <code className="codeblock">AmbientLight</code>: 전체 장면에 고르게
            빛을 비추는 조명
          </li>
          <li className="list-disc my-2">
            <code className="codeblock">PointLight</code>: 한 점에서 모든
            방향으로 빛을 발산하는 조명
          </li>
          <li className="list-disc my-2">
            <code className="codeblock">DirectionalLight</code>: 태양처럼
            평행광을 발산하는 조명
          </li>
        </ul>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Animation</h2>
        <p>
          <b>Animation</b>은 3D 객체를 시간에 따라 변화시키는 효과이다.
          R3F에서는 useFrame 훅을 사용하여 애니메이션을 설정하고, 객체의 변화를
          관리할 수 있다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingMesh() {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}`}
        </SyntaxHighlighter>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Controls</h2>
        <p>
          <b>Controls</b>는 사용자가 3D 장면과 상호작용할 수 있도록 돕는
          도구이다. 예를 들어, <code className="codeblock">OrbitControls</code>
          는 마우스를 이용해 장면을 회전, 확대/축소, 이동하는 기능을 제공한다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`import { OrbitControls } from '@react-three/drei';

<Canvas>
  <ambientLight />
  <OrbitControls />
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="red" />
  </mesh>
</Canvas>`}
        </SyntaxHighlighter>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-semibold mt-4 mb-2">Helpers</h2>
        <p>
          <b>Helpers</b>는 3D 장면을 더 쉽게 디버깅하거나 시각적으로 이해할 수
          있도록 돕는 요소들이다. 예를 들어,{" "}
          <code className="codeblock">AxesHelper</code>는 X, Y, Z 축을
          시각적으로 나타내주는 도구이다.
        </p>
        <SyntaxHighlighter language="typescript" style={tomorrow}>
          {`<Canvas>
  <axesHelper args={[5]} />
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="blue" />
  </mesh>
</Canvas>`}
        </SyntaxHighlighter>
        <p className="font-medium">종류</p>
        <ul className="pl-8">
          <li className="list-disc my-2">
            <code className="codeblock">AxesHelper</code>: 3D 공간의 축을
            시각적으로 보여주는 헬퍼
          </li>
          <li className="list-disc my-2">
            <code className="codeblock">GridHelper</code>: 그리드 형태로 3D
            공간을 구분해주는 헬퍼
          </li>
        </ul>
      </div>
    </div>
  ),
});

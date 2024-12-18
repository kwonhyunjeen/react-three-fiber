import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/installation")({
  component: Installation,
});

function Installation() {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl mb-4">Installation</h1>
      <p className="text-gray-400">
        Learn how to set up react-three-fiber in your project using Vite as the
        build tool.
      </p>
      <div className="my-6">
        React v18.0.0 이상의 버전에서 사용할 수 있으며, 웹 애플리케이션용
        ReactDOM과 모바일 개발용 React Native를 모두 지원합니다. 사용하는
        프레임워크에 따라 추가 설정이 필요할 수 있으니, 플랫폼별 세부사항은{" "}
        <Link
          to="https://r3f.docs.pmnd.rs/getting-started/installation"
          target="blank"
          className="underline"
        >
          공식문서
        </Link>
        를 참고하세요. 아래는 Vite를 사용한 설치 방법입니다.
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">1. 프로젝트 생성</h2>
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>pnpm create vite react-three-fiber --template react-ts</code>
        </pre>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">
          2. Three.js 및 React Three Fiber 설치
        </h2>
        <p>
          Three.js와 React Three Fiber는 3D 그래픽을 React 애플리케이션에
          통합하는 데 필수적인 라이브러리입니다.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>pnpm add three @types/three @react-three/fiber</code>
        </pre>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">
          3. 추가 유틸리티 설치
        </h2>
        <p>
          React Three Fiber와 함께 자주 사용되는 유용한 컴포넌트를 제공하는{" "}
          <code>@react-three/drei</code> 라이브러리를 설치합니다.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>pnpm add @react-three/drei</code>
        </pre>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">4. 개발 서버 실행</h2>
        <pre className="bg-gray-800 text-white p-4 rounded">
          <code>pnpm dev</code>
        </pre>
      </div>
    </div>
  );
}

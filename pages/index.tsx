// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-3xl font-bold">🚀 Zoomie Launchpad</h1>
      <p>당신의 밈코인을 프리세일로 세상에 공개하세요!</p>
      <div className="space-x-4">
        <Link href="/register"><a className="text-blue-600 underline">코인 등록</a></Link>
        <Link href="/projects"><a className="text-blue-600 underline">프리세일 보기</a></Link>
        <Link href="/admin"><a className="text-blue-600 underline">관리자 대시보드</a></Link>
      </div>
    </div>
  );
}

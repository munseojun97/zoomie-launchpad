// pages/projects.tsx
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, 'projects'));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(list);
    };
    fetchProjects();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">🚀 현재 등록된 프리세일 코인</h1>
      {projects.map((p) => (
        <Card key={p.id} className="flex items-center space-x-4 p-4">
          <Image src={p.imageUrl} alt={p.name} width={80} height={80} className="rounded-xl" />
          <CardContent className="flex-1">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">{p.desc}</p>
            <p className="text-sm mt-1">🎯 목표: {p.goal} SOL</p>
          </CardContent>
          <Link href={`/project/${p.id}`}>
            <Button>참여하기</Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}
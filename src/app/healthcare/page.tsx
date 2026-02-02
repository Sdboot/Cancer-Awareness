'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromStorage } from '@/lib/utils';

export default function HealthcarePage() {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromStorage();
    if (!user) {
      router.push('/signup');
    }
  }, [router]);

  return (
    <div className="container-safe py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">🏥 Healthcare Access</h1>
      <p className="text-lg text-gray-600 mb-8">Find trusted resources and guidance on when to see a doctor.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card bg-red-50 border-2 border-red-400">
          <h3 className="text-lg font-bold text-red-900 mb-4">🚨 Seek Immediate Care If:</h3>
          <ul className="space-y-2 text-sm text-red-900">
            <li>• Experiencing chest pain or difficulty breathing</li>
            <li>• Severe or persistent symptoms</li>
            <li>• Signs of infection (fever, swelling)</li>
            <li>• Any concerning changes you cannot explain</li>
          </ul>
        </div>

        <div className="card bg-blue-50 border-2 border-blue-400">
          <h3 className="text-lg font-bold text-blue-900 mb-4">📞 Schedule Regular Check-ups For:</h3>
          <ul className="space-y-2 text-sm text-blue-900">
            <li>• Annual physical exams</li>
            <li>• Cancer screening (per guidelines)</li>
            <li>• Persistent symptoms (2+ weeks)</li>
            <li>• Follow-up on abnormal results</li>
          </ul>
        </div>
      </div>

      <div className="card bg-gray-100 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Screening Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-primary mb-2">For Women:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mammogram: Age 40-50+</li>
              <li>• Pap Smear: Age 21-65 every 3-5 years</li>
              <li>• HPV Test: Age 30-65 every 5 years</li>
              <li>• Colorectal: Age 45+</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-secondary mb-2">For Men:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• PSA Test: Discuss with doctor age 40-50+</li>
              <li>• Testicular: Monthly self-exam age 15-40</li>
              <li>• Colorectal: Age 45+</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-100 border border-red-400 p-6 rounded-lg">
        <h3 className="font-bold text-red-900">⚠️ Important Medical Disclaimer</h3>
        <p className="text-red-900 text-sm mt-2">
          This platform provides educational information only. Screening recommendations are general guidelines. 
          Your healthcare provider will determine the best screening schedule for your individual risk factors. 
          Always consult a qualified medical professional.
        </p>
      </div>
    </div>
  );
}

import React, { useMemo } from 'react';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const OptimizedShadows = React.memo(() => {
  const shadowsAndLights = useMemo(() => (
    <AccumulativeShadows temporal frames={100} color="#AAA" colorBlend={3} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
      <RandomizedLight 
        intensity={Math.PI} 
        amount={8} 
        radius={6} 
        ambient={0.5} 
        opacity={0.5} 
        position={[-1.5, 2.5, 2.5]} 
        bias={0.001} 
      />
    </AccumulativeShadows>
  ), []); // Empty dependency array means this will only be calculated once

  return shadowsAndLights;
});

export default OptimizedShadows;
interface ClimberAnimationProps {
  scrollProgress: number;
  isClimberAtBottom: boolean;
}

const ClimberAnimation = ({ scrollProgress, isClimberAtBottom }: ClimberAnimationProps) => {
  return (
    <div className="fixed right-4 top-0 z-30 hidden lg:block pointer-events-none">
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 ${
          isClimberAtBottom ? 'animate-rope-vibrate' : ''
        }`}
        style={{ 
          height: `calc(100vh - 150px)`,
          boxShadow: '0 0 8px rgba(251, 146, 60, 0.4)'
        }}
      ></div>
      <div 
        className="relative"
        style={{ 
          transform: `translateY(${Math.min(scrollProgress * 6.5, 82)}vh)`,
          opacity: 1,
          transition: 'transform 0.3s ease-out',
          marginTop: '60px'
        }}
      >
        <div 
          className="text-4xl animate-swing filter drop-shadow-xl"
          style={{ 
            animationDuration: '4s',
            textShadow: '1px 1px 3px rgba(0,0,0,0.4)'
          }}
        >
          🧗‍♂️
        </div>
      </div>
    </div>
  );
};

export default ClimberAnimation;

interface TimerProps {
  timeRemaining: number;
}

const Timer = ({ timeRemaining }: TimerProps) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="text-lg font-semibold">
      Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
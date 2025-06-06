import { useEffect } from 'react';
import { QuizState } from '@/app/game/interfaces';
import { useRouter } from 'next/navigation';
import { useFinalScore } from '@/context/FinalScoreContext';
import { scoreData } from '@/components/game-questions/game-questions';

interface UseHandleQuizCompletionProps {
  state: QuizState;
}

export const useHandleQuizCompleted = ({
  state,
}: UseHandleQuizCompletionProps) => {
  const { setNewAmount } = useFinalScore();
  const router = useRouter();

  useEffect(() => {
    const lastScore = scoreData[0];

    if (state.isQuizCompleted) {
      const timeoutId = setTimeout(() => {
        // we protect ourselves in case of winning
        setNewAmount(lastScore.amount);
        router.push('/game-over');
      }, 2000);

      // Cleanup timeout on component unmount or before rerunning effect
      return () => clearTimeout(timeoutId);
    }
  }, [state.isQuizCompleted, router]);
};

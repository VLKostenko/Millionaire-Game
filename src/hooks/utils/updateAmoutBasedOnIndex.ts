// Interfaces
import { ScoreItemProps } from '@/components/score-list/interfaces';

export const updateAmountBasedOnIndex = (
  score: ScoreItemProps[],
  currentIndex: number,
  setNewAmount: (value: string) => void,
): void => {
  if (Array.isArray(score) && score.length > 0) {
    score.forEach(scoreItem => {
      if (scoreItem.id === currentIndex) {
        setNewAmount(scoreItem.amount);
      }
    });
  }
};

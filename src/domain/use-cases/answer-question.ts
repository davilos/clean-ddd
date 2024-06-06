import { UniqueEntityId } from '../../core/entities/unique-entity-id';
import { Answer } from '../entities/answer';
import { AnswersRepository } from '../repositories/answers-repository';

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}

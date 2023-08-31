import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  AnswerComment,
  AnswerCommentProps,
} from '@/domain/forum/enterprise/entities/answer-comment'

export function makeAnswerComment(
  override: Partial<AnswerCommentProps> = {},
  id?: UniqueEntityID,
) {
  const answer = AnswerComment.create(
    {
      answerId: new UniqueEntityID(),
      content: faker.lorem.paragraphs(2),
      authorId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answer
}

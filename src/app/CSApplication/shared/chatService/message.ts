/**
 * TODO необходимо поправить тип shptDate на дату, чтобы ложилась на дату из парсинга
 */
export class Message{
  constructor(public userId: number, public content: string, public shptDate: string) {}
}

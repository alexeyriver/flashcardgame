import mongoose from 'mongoose'
import Game from '../models/gameOfThrones.js'
import Rule from '../models/trafficRules.js'

mongoose.connect('mongodb://localhost:27017/reactflash', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


async function addCard() {
  const game = new Game({
    question: 'Как называется самый первый эпизод?(самая популярная фраза из сериала)',
    answer: 'Зима близко',
    cost: 300
  })

  const game2 = new Game({
    question: 'Как умерла дочь Серси, Мирцелла?',
    answer: 'Отравление',
    cost: 400
  })

  const game3 = new Game({
    question: ' Ивана Реона, сыгравшего Рамсей Болтона, чуть ли не сыграли в роли какого персонажа?',
    answer: 'Джон Сноу',
    cost: 1000
  })

  const rule = new Rule({
    question: 'Что означает мигание зеленого сигнала светофора?',
    answer: 'Разрешает движение',
    cost: 300
  })

  const rule2 = new Rule({
    question: 'Со скольки лет детям разрешено ездить на переднем сиденье автомобиля?',
    answer: '12',
    cost: 400
  })

  const rule3 = new Rule({
    question: 'что нужно делать при заносе на полноприводной машине',
    answer: 'Молиться',
    cost: 1000
  })

  await game.save()
  await game2.save()
  await game3.save()

  await rule.save()
  await rule2.save()
  await rule3.save()

  mongoose.disconnect();
}


addCard()

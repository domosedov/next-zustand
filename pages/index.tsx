import { FC, FormEvent, useCallback } from 'react'
import { Counter } from '../components/counter'
import { useStore, useTodoAPI } from '../store'

const Home: FC = () => {
  const todos = useStore(useCallback(state => state.todos, []))
  const { add } = useTodoAPI()
  const title = useStore(useCallback(state => state.todoTitle, []))
  const setTitle = useStore(useCallback(state => state.setTodoTitle, []))
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    add({ id: Date.now(), title, completed: false })
    setTitle('')
  }

  return (
    <div className='container max-w-screen-lg bg-yellow-100 md:'>
      <h1>Home Page</h1>
      <div className='w-[200px] lg:w-[500px]'>
        Далеко-далеко, за словесными горами в стране гласных и согласных живут
        рыбные тексты. Языком, ручеек большой пояс рот выйти несколько текст
        осталось за над заглавных страна родного повстречался, знаках текстов
        решила. Семь, языкового?
      </div>
      <div className='bg-green-500 w-[200px] h-[200px]' />
      <div className='flex items-stretch space-x-4'>
        <div className='flex-1'>
          <div className='aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9'>
            <img
              className='object-cover'
              src='https://picsum.photos/1000/1000'
              alt='Lorem'
            />
          </div>
        </div>
        <div className='flex-1'>
          <img
            src='https://picsum.photos/300/300'
            alt='ipsum'
            className='float-right pl-2 pb-2'
          />
          <p>
            Далеко-далеко за словесными горами в стране гласных и согласных
            живут рыбные тексты. Свой путь осталось его дорогу своего строчка
            рыбного гор, домах деревни там вопрос назад родного подпоясал!
            Деревни, продолжил? Продолжил одна текстов гор напоивший большой
            правилами ему вершину живет домах предупреждал необходимыми, lorem
            страна бросил коварный. Свой по всей там семь что своего
            единственное lorem? Решила скатился буквоград заголовок составитель
            точках его возвращайся грустный не собрал от всех речью меня свой
            путь обеспечивает, все если рыбными, рекламных бросил но маленькая,
            раз страна имеет. Свое агентство деревни лучше мир проектах одна от
            всех первую безопасную маленькая. Дал своего, дороге пунктуация
            оксмокс города то страна встретил!
          </p>
          <div className='flex space-x-2 mt-4'>
            <div className='w-1/2 md:line-clamp-2'>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты. Риторический свой семь буквоград но текст
              переписали переписывается составитель даже заглавных последний.
              Свой это проектах рукопись злых прямо, всеми предупреждал одна
              свое оксмокс вскоре необходимыми использовало строчка возвращайся
              заголовок языком меня путь приставка деревни. По всей семантика
              рот алфавит заманивший переписали.
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={evt => setTitle(evt.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
      <Counter />
      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
      <div>{Math.random()}</div>
    </div>
  )
}

export { Home as default }

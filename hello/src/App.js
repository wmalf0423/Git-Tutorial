import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import { Component } from 'react';

const customers = [
    {
        'id' : 'asdfadsf',
        'image' : 'https:/placeimg.com/64/64/1',
        'name' : '나동빈',
        'birthday' : '123124',
        'gender' : '남자',
        'job' : '대학생'
    },
    {
        'id' : 'abdbsdfgsd',
        'image' : 'https:/placeimg.com/64/64/2',
        'name' : '가나다',
        'birthday' : '123124',
        'gender' : '남자',
        'job' : '대학생'
    },
    {
        'id' : 'zcvwrt',
        'image' : 'https:/placeimg.com/64/64/3',
        'name' : '홍길동',
        'birthday' : '123124',
        'gender' : '남자',
        'job' : '대학생'
    }
]

class App extends Component{
    render(){
        return(
            <div>
                {
                    customers.map(c => {
                        return (
                        <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                        />
                        );
                    })
                }
            </div>
        );
    }
}
export default App;

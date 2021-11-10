import $ from 'jquery'
import './css/1.css'
import './css/2.less'
import './css/3.scss'
$(function(){
    $('li:odd').css('backgroundColor','pink');
    $('li:even').css('backgroundColor','blue');
})
class Person{
    static info = 'hudi3333'
}
console.log(Person.info)
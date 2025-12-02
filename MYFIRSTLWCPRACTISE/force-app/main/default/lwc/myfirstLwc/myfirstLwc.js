import { LightningElement} from 'lwc';

export default class MyfirstLwc extends LightningElement {
    name = 'azhar';
    age = 32;
    occupation = 'employed';
    status = '';
    qualification = 'graduation';

    usereneteredvalue='';
    usereneteredage= 0
    
    handlechange(event){

if (event.target.name = namefeild) {
    this.usereneteredvalue = event.target.value;
    console.log(usereneteredvalue + this.usereneteredvalue);
    
}

}

if (event,target,name = 'age') {
    this.usereneteredage = event.target.value;
    console.log(usereneteredage + this.usereneteredage);
}

if (event,target,name = 'occupation') {
    this.usereneteredvalue = event.target.value;
    console.log(usereneteredvalue + this.usereneteredvalue);

}

if (event,target,name = ismarried) {
    this.usereneteredvalue = event.target.checked;
    console.log(usereneteredvalue + this.usereneteredvalue);
}

if (event,target,name = occupation){
    this.usereneteredvalue = event.target.value;
    console.log(usereneteredvalue + this.usereneteredvalue);
}}

input=prompt('enter a command');
let todo=[]
while(input !==  'quit')

{
    if(input === 'new')
    {
        new_todo=prompt('enter a new todo');
        todo.push(new_todo);
        console.log(`${new_todo} added to the list`);
    }
    else if(input === 'list')
    {
        console.log('*********');
        for(let i=0;i<todo.length;i++)
        {
            console.log(`${i} : ${todo[i]}`);
        }
        console.log('*********');
    }
    else if(input === 'delete')
    {
        start=prompt('enter the index of the todo to be deleted');
        start=parseInt(start);
        while(isNaN(start) || start > todo.length - 1)
        {
            start=prompt('plese enter a valid index');
            start=parseInt(start);
        }
        old_todo=todo.splice(start,1);
        console.log(`${old_todo} deleted`)
    }
    else
    {
        input=prompt('please enter a valid command');
        continue;
    }
    
    input=prompt('enter a command')
}
console.log('out of the app')
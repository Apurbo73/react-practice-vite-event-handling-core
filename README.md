﻿###### react-practice-vite-event-handliing
###### Simple onclick, onChange events.

##### onClick Event:
##### Counter App:-
###### Increase Counter.
###### Disable Increase Counter when counter value is 05.
###### Decrease Counter.
###### Disable Decrease Counter when counter value is -05.
###### Reset counter.

##### Simple optional chaining:
###### if increase limit is reached message is shown and
###### if decrease limit is reached message is also shown otherwise,
###### it shows Increase Decrease From -05 To 05.

##### onChange Event:-
###### Takes input and shows them on a paragraph. 

#### Simple onclick, onChange events.
###### const [count, setCount] = useState(0);
##### Updating state based on current state:-
###### const handleIncrease = () => {
###### setCount(count + 1); // 0+1
###### setCount(count + 1); // 0+1
###### setCount(count + 1); // 0+1
###### };
#### Output is 1
###### Updating state based on previous state:-
###### const handleIncrease = () => {
###### setCount((count)=>count+1); // 0+1
###### setCount((count)=>count+1); // 1+1
###### setCount((count)=>count+1); // 2+1
###### };
#### Output is 3

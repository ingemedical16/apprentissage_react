import React, { useEffect, useState } from 'react';
const useFetch = (taskText= null) => {
    const fetchTasks = async (taskText) => {
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);
        const [tasks, setTasks] = useState([]);
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            'https://react-http-4b760-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
            taskText 
            ?    {
                method: 'POST',
                body: JSON.stringify({ text: taskText }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            :null
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          const loadedTasks = [];
    
          for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
          }
    
          setTasks(loadedTasks);
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      };
    
      useEffect(() => {
        fetchTasks();
      }, []);
    
      const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
      };
}

export default useFetch;
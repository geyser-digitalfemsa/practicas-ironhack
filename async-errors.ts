

async function fetchData (url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'success') {
                resolve({
                    status: "success",
                    data: [1, 2, 3, 4, 5]
                })
            } else {
                reject('Error fetching data');
            }
        }, 2000);
    })
}

async function processData (fetchedData: any): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(() => {
            let {data} = fetchedData;
            for (let index = 0; index < data.length; index++) {
                const num = data[index];
                data[index] = num * 2;
            }
            resolve(data);
        }, 1000);
    })
}

async function displayData (data: any): Promise<any> {
    return new Promise((resolve) => {
        resolve(console.log('displayData --> ', data));
    })
}

async function fetchAndProcessData (url: string) {
    try {
        const result1 = await fetchData(url);
        const result2 = await processData(result1);
        displayData(result2);
    } catch (error) {
        console.log(error);
        ;
    }
}

fetchAndProcessData('success');
fetchAndProcessData('error');
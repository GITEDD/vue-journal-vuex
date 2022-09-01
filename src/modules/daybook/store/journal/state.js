 export default () => ({

     isLoading: true,
     entries: [{
             id: new Date().getTime(),
             date: new Date().toDateString(),
             text: 'Cupidatat id voluptate incididunt proident duis do irure nisi nulla ea eu. Proident consequat ullamco ullamco cupidatat nisi. Laborum dolore cillum occaecat quis sit nostrud labore.',
             picture: null,
         },
         {
             id: new Date().getTime() + 10000,
             date: new Date().toDateString(),
             text: 'Cupidatat id voluptate incididunt proident duis do irure nisi nulla ea eu. Proident consequat ullamco ullamco cupidatat nisi. Laborum dolore cillum occaecat quis sit nostrud labore.',
             picture: null,
         },
         {
             id: new Date().getTime() + 2000,
             date: new Date().toDateString(),
             text: 'Cupidatat id voluptate incididunt proident duis do irure nisi nulla ea eu. Proident consequat ullamco ullamco cupidatat nisi. Laborum dolore cillum occaecat quis sit nostrud labore.',
             picture: null,
         }
     ]
 })
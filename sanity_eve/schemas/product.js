export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields:[
    {
      name:'image',
      title:'image',
      type:'array',
      of:[{type:'image'}],
      options:{
        hotspot: true,
      }
    },
    {
      name:'name',
      title:'Name',
      type :'string',
    },
    {
      name:'slug',
      title:'Slug',
      type:'slug',
      option:{
        source:'name',
        maxlength:90,
      }
    },
    {
      name:'price',
      title:'Price',
      type:'number',
    },
    {
      name:'details',
      title:'Details',
      type:'string',
    }
  ]
}
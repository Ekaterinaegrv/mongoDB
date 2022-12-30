db.createCollection("cars", {
  validator: {
   $jsonSchema: 
  {
        bsonType: "object",
        required: ['brand', 'model'],
        properties: {
            brand: {
                bsonType: "string"
            },
            model: {
                bsonType: "string"
            },
            engine: {
                  volume: {
                    bsonType: "double"
                  },
                  fuelType: {
                    bsonType: "string"
                  }
                
            },
            capacity: {
                bsonType: "int"
            },
            weight: {
                bsonType: "double"
            },
            length: {
              bsonType: "double"
            },
            vip: {
              bsonType: "boolean"
            }
        }
  }
  }
})

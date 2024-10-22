import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {

    const toast = useToast();

    const [newProduct, setNewProduct] = useState({
        name:"",
        price:"",
        image:"",
    });

    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        const {success,message} = await createProduct(newProduct);
        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true
            })
        } else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true
            })
        }
        setNewProduct({name:"", price:"", image:""});
    };

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
        >
            <Heading as={'h1'} size={'xl'} textAlign={'center'} mt={10} mb={1} >
                Create New Product 
            </Heading>

            <Box
                w={'80%'} bg={useColorModeValue('white','gray.800')}
                p={6} rounded={'lg'} shadow={'md'}
                >
                    <VStack spacing={5}>
                        <Input 
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />

                        <Input 
                            placeholder='Price'
                            name='price'
                            type='Number'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        
                        <Input 
                            placeholder='Image URL'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />

                        <Button colorScheme='blue' fontSize={'1rem'} onClick={handleAddProduct} >
                            Add Product
                        </Button>

                    </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage

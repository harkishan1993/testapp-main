import prisma from "./prisma";

export const prismaConnect = () => {
    return prisma.$connect()
}

export const prismaDisconnect = () => {
    return prisma.$disconnect()
}

export const getProductAll = () => {
    return prisma.product.findMany({
        select: {
            id: true,
            slug: true,
            image: {
                select: {
                    url: true
                }
            },
            name: true
        }
    })
}

export const getProductBySlug = (slug) => {
    return prisma.product.findMany({
        where: {
            slug: slug
        },
        select: {
            id: true,
            name: true,
            image: {
                select: {
                    url: true
                }
            },
            description: {
                select: {
                    description: true
                }
            },
            specification: {
                select: {
                    specification: true
                }
            },
            CategoriesOnCategorys: {
                select: {
                    category: {
                        include: {
                            CategoriesOnCategorys: {
                                select: {
                                    producs: {
                                        select: {
                                            id: true,
                                            image: {
                                                select: {
                                                    url: true
                                                }
                                            },
                                            name: true,
                                            slug: true,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

export const getSliderimage = () => {
    return prisma.product.findMany({
        where:{
            isslider: 'true'
        },
        select:{
            id: true,
            image:{
                select:{
                    url: true
                }
            },
            slug: true,
            name: true
        }
    })
}
USE [FoodDB]
GO

/****** Object:  Table [dbo].[Users]    Script Date: 3/25/2024 9:24:27 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](20) NULL,
	[Email] [varchar](50) NULL,
	[Password] [varchar](10) NULL,
	[PhoneNo] [varchar](10) NULL,
	[Address] [varchar](max) NULL,
	[PostCode] [varchar](6) NULL,
	[Role] [varchar](15) NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


